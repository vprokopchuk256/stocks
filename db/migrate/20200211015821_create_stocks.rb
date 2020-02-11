class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false, index: { unique: true }
      t.string :company_name, null: false, index: true
    end
  end
end
