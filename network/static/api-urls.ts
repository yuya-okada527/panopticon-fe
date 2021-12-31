export default class ApiUrls {
  static API_URL = "http://localhost:3000"; // TODO: 環境変数から取得する
  static getTasksUrl = (project_id: string | string[]) =>
    `${this.API_URL}/v1/projects/${project_id}/tasks`;
  static getTaskUrl = (
    project_id: string | string[],
    task_id: string | string[]
  ) => `${this.API_URL}/v1/projects/${project_id}/tasks/${task_id}`;
  static getTaskProvidersUrl = (project_id: string | string[]) =>
    `${this.API_URL}/v1/projects/${project_id}/task_providers`;
  static getTaskProviderSyncUrl = (
    project_id: string | string[],
    task_provider_id: string | string[]
  ) =>
    `${this.API_URL}/v1/projects/${project_id}/task_providers/${task_provider_id}/sync`;
}