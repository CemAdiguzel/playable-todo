This project includes backend and frontend.

To start this project the user should open a terminal, and navigate into the playable-todo folder. After navigating inside our main folder:

To initialize the backend :
cd backend
npm install
npm start

after these line, the terminal should run:
🚀 Server is running!  
 🔉 Listening on port 3001

DB is up

then the backend is working.

After starting the server, the user should open a new terminal, and navigate into the playable-todo folder. After navigating inside our main folder:
to initialize the frontend:
cd frontend
npm install
npm start

after these lines, the terminal should run:

Compiled successfully!

You can now view frontend in the browser.

Local: http://localhost:3000  
 On Your Network: http://192.168.1.43:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

Then the frontend is working as well. After that you can navigate through the app freely on http://localhost:3000

Used Tech:

Node js
Express js
React js
Axios
Material UI.

If i had no limitations, I would prefer GraphQL for api, and Prisma for backend.

In this app there are basicly 4 things you can do. You can create, update, delete and read a To-Do Item. Basicly all the CRUD. I have not implemented multiple selection neither drag and drop feature. I had 2 days and for 1.5 day i was sick.

Initially i was planning on installing react-dnd-beautiful package for drag and drop feature. It would need to update the backend since lexorank should be added as well.

Also all the items in our todos includes a status variable. But i couldn't find what to do with them.

The toDo items has many to one relations with users.

Cem
