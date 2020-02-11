class StocksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound do
    head :not_found
  end

  def index
    scope = q ? Stock.search(q: q) : Stock.all
    scope = scope.limit(limit) if limit
    score = scope.order(company_name: :asc)

    render json: scope
  end

  def show
    render json: Stock.find_by!(symbol: params.require(:symbol).upcase),
           serializer: StockSerializerWithHistory
  end

  private

  def q
    params[:q]
  end

  def limit
    params[:limit]
  end
end
