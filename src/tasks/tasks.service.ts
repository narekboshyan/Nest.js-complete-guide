import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.module";
import { v4 as uuid } from "uuid";
import { CreateTaskToDo } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(({ id: taskId }) => taskId === id);
    }

    createTask(createTaskDto: CreateTaskToDo): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }

    deleteTaskById(id: string): boolean {
        this.tasks = this.tasks.filter(({ id: taskId }) => id !== taskId);
        return true;
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        console.log(status);
        task.status = status;
        return task;
    }
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;
        let tasks: Task[] = this.getAllTasks();

        if (status) {
            tasks = tasks.filter(
                ({ status: taskStatus }) => taskStatus === status
            );
        }
        if (search) {
            tasks = tasks.filter(
                ({ title, description }) =>
                    title.includes(search) || description.includes(search)
            );
        }
        return tasks;
    }
}
