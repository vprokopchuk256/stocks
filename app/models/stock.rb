class Stock < ApplicationRecord
  validates :symbol, presence: true
  validates :company_name, presence: true

  def self.search(q: '')
    where('company_name LIKE ?', "#{q}%")
  end
end
