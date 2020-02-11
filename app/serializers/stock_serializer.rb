class StockSerializer < ActiveModel::Serializer
  attributes :symbol, :company_name
end
