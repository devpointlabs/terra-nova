class AddColumnstoMailer < ActiveRecord::Migration[5.2]
  def change
    add_column :mailers, :first_name, :string
    add_column :mailers, :last_name, :string
    add_column :mailers, :message, :text
  end
end
