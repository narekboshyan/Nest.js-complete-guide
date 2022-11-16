import { Task, TaskStatus } from "./task.module";
import { CreateTaskToDo } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskToDo): Task;
    deleteTaskById(id: string): boolean;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[];
}
