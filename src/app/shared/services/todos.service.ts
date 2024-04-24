import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpClient = inject(HttpClient);
  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.All);
  apiBaseUrl = 'http://localhost:3004/todos';

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  getTodos(): void {
    this.httpClient.get<TodoInterface[]>(this.apiBaseUrl).subscribe((todos) => {
      this.todosSig.set(todos);
  });
}}