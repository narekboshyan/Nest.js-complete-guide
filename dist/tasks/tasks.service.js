"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_module_1 = require("./task.module");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(({ id: taskId }) => taskId === id);
    }
    createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = {
            id: (0, uuid_1.v4)(),
            title,
            description,
            status: task_module_1.TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTaskById(id) {
        this.tasks = this.tasks.filter(({ id: taskId }) => id !== taskId);
        return true;
    }
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        console.log(status);
        task.status = status;
        return task;
    }
    getTasksWithFilters(filterDto) {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(({ status: taskStatus }) => taskStatus === status);
        }
        if (search) {
            tasks = tasks.filter(({ title, description }) => title.includes(search) || description.includes(search));
        }
        return tasks;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map