class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :task_date
      t.string :task_time
      t.string :pet_name

      t.belongs_to :user
      t.timestamps
    end
  end
end