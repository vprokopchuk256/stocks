class StocksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound do
    head :not_found
  end

  def index
    render json: q ? Stock.search(q: q) : Stock.all
  end

  def show
    render json: Stock.find_by!(symbol: params.require(:symbol).upcase)
  end

  private

  def q
    params[:q]
  end
end
