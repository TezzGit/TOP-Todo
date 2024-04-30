import { DefaultDict } from "./utils";

const createTask = (task_name, id) => {
    let _name = task_name;
    let _priority = 3;
    let _dueDate = NaN;
    let _id = id;

    const setName = (task_name) => _name = task_name;
    const setPriority = (new_priority) => _priority = new_priority;
    const setDueDate = (date) => _dueDate = date;

    const Name = () => _name;
    const Priority = () => _priority;
    const DueDate = () => _dueDate;
    const Id = () => _id;

    return { Name, setName, Priority, setPriority, DueDate, setDueDate, Id };
}

const TaskList = (function () {
    const _tasks = new DefaultDict(0);

    const _findFirstAvailbleId = () => {
        const keys = _tasks.keys;
        keys.array.forEach(element => {
            if (_tasks[element] = 0) return element;
        });
        return _tasks.length;
    }
    const addTask = (name) => {
        const id = _findFirstAvailbleId();
        const task = createTask(name, id);
        // need to add task to dictionary of ids
        return task;
    }
    const getTask = (id) => _tasks[id];

    const removeTask = (id) => {
        _tasks[id] = 0;
    }

    return { addTask, getTask, removeTask };
})();

export default TaskList;