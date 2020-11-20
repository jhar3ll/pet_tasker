class TasksController < ApplicationController

  def index
    tasks = Task.all
    render json: tasks, except: [:created_at, :updated_at]
  end

  def show
    task = Task.find_by(id: params[:id])
    render json: task, except: [:created_at, :updated_at]
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: task, status: :created, location: task
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    task.destroy
  end

  private
    def task_params
      params.require(:task).permit(:description, :task_date, :task_time, :pet_name, :user_id)
    end
end