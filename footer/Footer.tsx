// TODO: Fetch contact details from Payload (e.g., a Globals collection)
const address = "853 Turquoise Street, Pacific Beach, San Diego, California 92109"
const phone = "(858) 488-3631"
const email = "commander@vfw5985.org" // Replace with actual or fetched email

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    // Using dark background, light text as per common footer patterns aligning with VFW guide examples
    <footer className="bg-black text-gray-400 p-8 mt-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <p className="font-semibold text-white mb-2">VFW Post 5985</p>
          <p className="text-sm">{address}</p>
          <p className="text-sm">Phone: {phone}</p>
          <p className="text-sm">
            Email: <a href={`mailto:${email}`} className="text-gray-400 hover:text-vfw-red transition-colors duration-200">{email}</a>
          </p>
        </div>
        {/* TODO: Add social media links if needed */}
        <div className="text-xs border-t border-gray-700 pt-6">
          Copyright © {currentYear} - VFW Post 5985
        </div>
      </div>
    </footer>
  )
} 