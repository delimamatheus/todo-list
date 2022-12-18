import { ItemTask } from "../../components/types/Home/ItemsTask";

export interface TaskProps{
    task: ItemTask
    deleteTask: (taskId: number) => void
}