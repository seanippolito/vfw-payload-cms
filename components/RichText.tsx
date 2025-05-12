import escapeHTML from 'escape-html'
import { TextNode } from 'lexical' // Corrected import

// Define the expected shape of the Lexical JSON content
type LexicalNode = {
  type: string
  format?: number
  children?: LexicalNode[]
  text?: string
  tag?: string
  url?: string
  bold?: boolean // Added based on usage
  italic?: boolean // Added based on usage
  underline?: boolean // Added based on usage
  strikethrough?: boolean // Added based on usage
  [key: string]: unknown // Allow other properties
}

interface RichTextProps {
  content: {
    root: {
      children: LexicalNode[]
    }
  }
  className?: string
}

// Serializer function
function serializeNode(node: LexicalNode): JSX.Element | null {
  // Check if it's a TextNode using Lexical's type guard
  if (node.type === 'text') {
    // Check type first
    const textNode = node as LexicalNode & {
      text: string
      bold?: boolean
      italic?: boolean
      underline?: boolean
      strikethrough?: boolean
    } // Type assertion
    let textElement = <span dangerouslySetInnerHTML={{ __html: escapeHTML(textNode.text) }} />

    if (textNode.bold) {
      textElement = <strong key={Math.random()}>{textElement}</strong>
    }
    if (textNode.italic) {
      textElement = <em key={Math.random()}>{textElement}</em>
    }
    if (textNode.underline) {
      textElement = (
        <u key={Math.random()} style={{ textDecoration: 'underline' }}>
          {textElement}
        </u>
      )
    }
    if (textNode.strikethrough) {
      textElement = (
        <s key={Math.random()} style={{ textDecoration: 'line-through' }}>
          {textElement}
        </s>
      )
    }
    // Add other text formatting if needed

    return textElement
  }

  if (!node) {
    return null
  }

  // Map other Lexical node types to React components
  switch (node.type) {
    case 'heading':
      const HeadingTag = (node.tag as keyof JSX.IntrinsicElements) || 'h1'
      return (
        <HeadingTag key={Math.random()}>
          {node.children?.map((child) => serializeNode(child))}
        </HeadingTag>
      )
    case 'list':
      const ListTag = node.tag === 'ol' ? 'ol' : 'ul' // Default to ul
      return (
        <ListTag key={Math.random()}>{node.children?.map((child) => serializeNode(child))}</ListTag>
      )
    case 'listitem':
      return <li key={Math.random()}>{node.children?.map((child) => serializeNode(child))}</li>
    case 'link':
      const linkNode = node as LexicalNode & { url?: string }
      return (
        <a
          href={escapeHTML(linkNode.url || '')}
          key={Math.random()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkNode.children?.map((child) => serializeNode(child))}
        </a>
      )
    case 'paragraph':
      return <p key={Math.random()}>{node.children?.map((child) => serializeNode(child))}</p>
    case 'linebreak':
      return <br key={Math.random()} />
    default:
      // For nodes like 'root' or potentially unknown types, serialize their children
      if (node.children) {
        return (
          <Fragment key={Math.random()}>
            {node.children.map((child) => serializeNode(child))}
          </Fragment>
        )
      }
      return null
  }
}

// Use React.FC and explicitly type props
export const RichText: React.FC<RichTextProps> = ({ content, className }) => {
  if (!content || !content.root || !content.root.children) {
    return null
  }

  const serializedChildren = content.root.children.map((node, i) => serializeNode(node))

  // Apply Tailwind Typography prose styles
  const defaultClasses = 'prose prose-a:text-vfw-red hover:prose-a:underline max-w-none'

  return <div className={`${defaultClasses} ${className || ''}`.trim()}>{serializedChildren}</div>
}
