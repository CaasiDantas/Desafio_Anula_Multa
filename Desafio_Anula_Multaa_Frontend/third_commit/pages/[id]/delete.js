import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../app/styles/delete.css"

const Delete = () => {
  const router = useRouter();
  const { id } = router.query;

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

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
      method: "DELETE"
    });

    if (response.ok) {
      // Task deleted successfully
      router.push("/tasks");
    } else {
      // Handle error
      alert("Failed to delete task");
    }
  };

  return (
    <>
      <div className="title">
        <div className="title-delete">
          <h1 className="title-h1">Delete Task</h1>
        </div>
        <div className="container">

        <form>
          <div className="do-you-want-to-delete">
            Are you sure to delete <strong>{task?.title}</strong>?
          </div>
          <div className="controls">
            <Link
              href="/tasks"
              className="cancel"
              >
              Cancel
            </Link>
            <button
              className="delete"
              type="button"
              onClick={handleUpdate}
              >
              Delete
            </button>
          </div>
        </form>
      </div>
      <Head>
        <title>Delete Task</title>
      </Head>
              </div>
    </>
  );
};

export default Delete;