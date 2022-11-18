import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateTaskToDo } from "./dto/create-task.dto";
import { Task, TaskStatus } from "./task.model";
import { TasksService } from "./tasks.service";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
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
    @Body("status") UpdateTaskStatusDto: UpdateTaskStatusDto
  ): Task {
    const { status } = UpdateTaskStatusDto;
    return this.taskService.updateTaskStatus(id, status);
  }
}
