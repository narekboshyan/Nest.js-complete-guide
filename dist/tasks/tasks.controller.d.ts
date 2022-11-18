import { CreateTaskToDo } from "./dto/create-task.dto";
import { Task } from "./task.model";
import { TasksService } from "./tasks.service";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskToDo): Task;
    deleteTaskById(id: string): boolean;
    updateTaskStatus(id: string, UpdateTaskStatusDto: UpdateTaskStatusDto): Task;
}
