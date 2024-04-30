import TaskList from "./tasks";
import { DefaultDict } from "./utils";

const createBucket = (name,id) => {
    let _name = name;
    const _id = id;
    const _tasks = [];

    const Name = () => _name;
    const setName = (name) => _name = name;

    const Id = () => _id;

    const createTask = (name) => {
        const task = TaskList.addTask(name);
        _tasks.push(task);
    }

    const addTask = (id) => {
        _tasks.push(TaskList.getTask(id));
    }
    
    const removeTask = (id) => {
        const id_to_remove = _tasks.findIndex(TaskList.getTask(id));
        _tasks.slice(id_to_remove, 1);
    }

    const getTasks = () => {
        return _tasks;
    }

    return { Name, setName, Id, createTask, addTask, removeTask, getTasks };
}

const Buckets = (function () {

    const _buckets = DefaultDict(0);
    
    const _findFirstAvailbleId = () => {
        const keys = _buckets.keys;
        keys.array.forEach(element => {
            if (keys[element] = 0) {
                return element;
            }
        });
        return keys.length;
    }

    const addBucket = (name="Tasklist") => {
        const id = _findFirstAvailbleId();
        const new_bucket = createBucket(name, id);
        _buckets.push(new_bucket);
    }

    const removeBucket = (id) => {
        if (_buckets.length > 1) {
            // i want all tasks relocated before the bucket can be deleted.
            _buckets[id].getTasks().forEach((element)=> {
                _buckets[0].addTask(TaskList.getTask(element.id));
            })
            _buckets[id] = 0;
        }
    }

    const getBuckets = () => {
        const bucketArray = [];

        const keys = _buckets.keys;
        keys.array.forEach((element)=> {
            if (_buckets[element] != 0) {
                bucketArray.push(_buckets[element]);
            }
        })
        return bucketArray;
    }

    return {addBucket, removeBucket, getBuckets};
})();