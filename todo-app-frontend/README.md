### 📝 To-Do List App  
A **simple and modern** full-stack **To-Do List App** built with **React.js (frontend)** and **Node.js + Express + MongoDB (backend)**.

## 🚀 Features  
✅ **Add, delete, and manage tasks**  
✅ **MongoDB for persistent storage**  
✅ **Modern UI with gradients & animations**  
✅ **Fully responsive design**  
✅ **Real-time updates without refreshing**  

---

## 🛠 Tech Stack  

### **Frontend:**  
🔹 React.js (Hooks, State Management)  
🔹 Styled with modern **CSS (Gradients, Animations)**  

### **Backend:**  
🔹 Node.js & Express.js (REST API)  
🔹 MongoDB + Mongoose (Database)  
🔹 CORS, dotenv (Security & Config)  

---

## 📦 Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/aryansingh2206/todo-list-app.git
cd todo-list-app
```

### **2️⃣ Backend Setup**  
```sh
cd todo-app-backend
npm install
```
Create a `.env` file in the backend folder and add:  
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:  
```sh
npm run dev
```

### **3️⃣ Frontend Setup**  
Open a new terminal:  
```sh
cd ../todo-app-frontend
npm install
npm start
```

---

## 🚀 API Endpoints  
| Method | Endpoint        | Description            |
|--------|---------------|------------------------|
| `GET`  | `/api/todos`  | Fetch all tasks       |
| `POST` | `/api/todos`  | Add a new task        |
| `DELETE` | `/api/todos/:id` | Delete a task |

---

## 💡 Future Improvements  
🔹 **Add due dates & priority levels**  
🔹 **Drag-and-drop task reordering**  
🔹 **Dark mode toggle**  

