class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :User_id
      t.integer :Rating
      t.string :Title
      t.text :Body
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
