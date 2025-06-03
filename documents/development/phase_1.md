### Phase 1 Development

1. Seed the data from the created collections and generate migration scripts
  - When seeding data the existing data is wiped form the Database
  - Pages 
    - The data was seeded for the home page, will seed additional pages for VFW when created
    - Copying the API data after creating the page worked best, needed to remove some fields that related to createdAt dates and references to foreign keys, used AI to refactor and remove quotes from keys with great success
    - Need to figure out how to seed data for multiple tenants? Phase 10 perhaps? Remove the safeguard to seed a clean database and just append new data for new tenants
  - Users
    - This was easy to seed users in the DB, just follow the config or the API
  - Media
    - Seeding the media was a bit tricky, I opted to see data in the github repo like the example as oppose to the file system
    - sizes seem to not work for the jpeg image i tested as they were not created. They are created for the seeded data I copies which was a different format
    - format that seems to work best is .webp, will need to test with that in the future
  - Header
    - Header data needs to be seeded with links to pages
  - Footer
    - Footer data needs to also be seeded with links and info
  - Sites
    - I opted not to seed this data at this time since it may be replaced with a plugin
   
2. Update to the latest Payload Version
   - I ran pnpm update and nothing seemed to break, did little testing, going to just continue as build is fine

3. Implement Posts collection and seed data
   - The posts collection touches a few things, not sure I want to bring in every feature here. Is it needed for the VFW?
   - Integrated very basic frontend for posts
   - Integrated a few more components and a post hero
   - Still need to seed posts data
4. Integrate UI for Posts collection config
   - Completed a basic UI/UX experience for this
   - much more room to expand on what a post is
5. Update Header UI/UX to match VFW site
   - Pretty much done, need to add pages and search bar
   - Header is data saved in the Database
   - I used a Rich text editor for the address but I think it would be best to store the Logo and Address in a collection that can be reused in the header
   - May incorporate Logo picture into DB as well, this may be needed as logo doesn't load in some places
6. Update Footer UI/UX
    - Implemented basic UI for footer to match current website, need to determine how to handle addresses
7. Footer should include links to social media, spotify, and such
   - Created 3 new blocks that handle embedding youtube, spotify, and instagram content in the rich text lexical editor as well as on a page
   - Easily able to embed Facebook, twitter and other socials if needed
   - added links to footer, do we want to embed profiles in the footer?
8. Integrate Media Block, Code Block, and Archive Block
   - Following the flow from the prior tasks this was a trivial task
9. Integrate Search Bar in header
10. 
10. Update pages collection to include desired features
11. Add Pages for 
   - Home
   - Calendar & Food Menu
   - Links
   - Meetings
   - Membership
   - Officers & Committees
   - Programs
   - Chaplains Corner



### Phase 2 Development

1. Build the new home page for the VFW
   1. Title 
   2. Image include
   3. Section for Text
   4. VFW Membership Statistics (create collection around this data or infer information from Member collection...)
      1. Create grid for this 
      2. upload CSV data received from VFW to collection... members collection? users collection? should the member be a role?
   5. Canteen Hours grid
      1. PDF Viewer Editor in a block?
      2. Option to download PDF
   6. Meeting Schedule Grid
2. Build the Calendar And Food Menu
   3. Need collection for Events
   4. Add PDF viewer block? 
   5. Need collection for Food menu
   6. Add PDF Viewer block for food menu
   7. Add Promotional Image Block

### Phase 3 Development

1. Build out the links page
   1. Create collection for list of links
   2. UI/UX block for Links and Link Title of Group
2. Build out the Meetings page
   1. Title
   2. Short Excerpt 
   3. VFW Meeting Minutes PDF Viewer?
   4. Faculty Meeting Minutes?
   5. Section for AL, ALA, and SAL Meeting Minutes CTA?

### Phase 4 Development

1. Build out the Membership Page
   1. Membership Application form
   2. Membership PDF Viewer?
   3. Links to affialited programs
   4. Build out entire form including Document upload

### Phase 5 Development

1. Officers and Committees Page
   1. Build out UI/UX
   2. Determine if ranks are fields on a new members collection or the users collection
   3. create collection for list of committees
2. Build out Programs page
3. Build out Chaplains Corner

### Phase 6 development

1. Implement login/logout feature for general user
2. Implement RBAC/ABAC

### Phase 7 development

1. Integrate Stripe or some alternative payment platform
2. Integrate minor ecommerce platform
3. Implement Multi-Tenancy through plugin
