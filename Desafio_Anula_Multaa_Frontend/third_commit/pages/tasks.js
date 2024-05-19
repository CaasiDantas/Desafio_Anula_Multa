import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../app/styles/task.css"

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks"); 
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]" id="tasks-title">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold" id="title">Tasks</h1>
          <Link
            className="link"
            href="/create" id="link"
          >
            Create a New Task
          </Link>
        </div>
        <div className="container-list-task">

        <ul className="list-tasks">
          {tasks.map((task) => (
            <li key={task.id} className="py-2 flex justify-between w-full">
              <span>
                <strong>{task.title}</strong> - {task.description}
              </span>
              <span className="edit-delete">
                <Link className="edit" href={`/${task.id}/edit`}>Edit</Link>
                <Link className="delete" href={`/${task.id}/delete`}>Delete</Link>
              </span>
            </li>
          ))}
          {tasks?.length < 1 && <div className="py-2">No data</div>} 
        </ul>
      </div>
          </div>
      <Head>
        <title>Task</title>
      </Head>
    </>
  );
};

export default Home;