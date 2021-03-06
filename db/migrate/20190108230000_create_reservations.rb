class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.date :start_date
      t.date :end_date
      t.integer :room_id
      t.integer :adults
      t.integer :children
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
