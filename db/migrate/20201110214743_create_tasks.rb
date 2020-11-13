class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :task_date
    
      #t.belongs_to :pet
      t.timestamps
    end
  end
end
