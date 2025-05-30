### Phase 1 Development

1. Seed the data from the created collections and generate migration scripts
   - Pages
   - Users
   - Media
   - Sites
   
2. Update to the latest Payload Version
3. Implement Posts collection and seed data
4. Integrate UI for Posts collection config
5. Update Header UI/UX to match VFW site
6. Update Footer UI/UX
7. Footer should include links to social media, spotify, and such
8. Integrate Search Bar in header
9. Update pages collection to include desired features
10. Add Pages for 
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


3. Implement Multi-Tenancy through plugin

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.
