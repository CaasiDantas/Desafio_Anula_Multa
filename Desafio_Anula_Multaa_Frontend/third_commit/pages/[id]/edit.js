import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../app/styles/edit.css"

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [task, setTask] = useState({
    title: "",
    description: "", 
  });

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`/api/tasks/${id}`);
      const data = await response.json();
      setTask(data);
    };

    if (id) {
      fetchTask();
    }
  }, [id]);

  const handleUpdate = async () => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      // Task update successfully
      router.push("/tasks");
    } else {
      // Handle error
      alert("Failed to edit task");
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Edit Task</h1>
        </div>
        <form>
          <div className="title">
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
            className="edit-task"
            type="button"
            onClick={handleUpdate}
          >
            Edit Task
          </button>
        </form>
      </div>
      <Head>
        <title>Edit Task</title>
      </Head>
    </>
  );
};

export default Edit;