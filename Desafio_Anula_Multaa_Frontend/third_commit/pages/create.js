import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../app/styles/create.css"

const Create = () => {
  const router = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      // Task created successfully
      router.push("/tasks");
    } else {
      // Handle error
      alert("Failed to create task");
    }
  };

  return (
    <>
      <div className="container">
        <div className="create-title">
          <h1 className="title">Create Task</h1>
        </div>
        <form>
          <div className="title-create-task-label">
            <label>Title</label>
            <input
              className="input-title"
              type="text"
              name="title"
              value={task?.title}
              onChange={onChange}
            />
          </div>
          <div className="description-task">
            <label>Description</label>
            <input
              className="input-description"
              type="text"
              name="description"
              value={task?.description}
              onChange={onChange}
            />
          </div>
          <button
            className="create-task"
            type="button"
            onClick={handleCreate}
          >
            Create Task
          </button>
        </form>
      </div>
      <Head>
        <title>Create Task</title>
      </Head>
    </>
  );
};

export default Create;