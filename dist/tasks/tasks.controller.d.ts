import { CreateTaskToDo } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task, TaskStatus } from "./task.module";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTaskToDo): Task;
    deleteTaskById(id: string): boolean;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
