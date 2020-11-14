class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.date :task_date
      t.time :task_time
    
      t.timestamps
    end
  end
end
