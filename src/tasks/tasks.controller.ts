import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from "@nestjs/common";
import { CreateTaskToDo } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task, TaskStatus } from "./task.module";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.taskService.getTasksWithFilters(filterDto);
        }
        return this.taskService.getAllTasks();
    }

    @Get("/:id")
    getTaskById(@Param("id") id: string): Task {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskToDo) {
        return this.taskService.createTask(createTaskDto);
    }

    @Delete("/:id")
    deleteTaskById(@Param("id") id: string): boolean {
        return this.taskService.deleteTaskById(id);
    }

    @Patch("/:id/status")
    updateTaskStatus(
        @Param("id") id: string,
        @Body("status") status: TaskStatus
    ): Task {
        return this.taskService.updateTaskStatus(id, status);
    }
}
