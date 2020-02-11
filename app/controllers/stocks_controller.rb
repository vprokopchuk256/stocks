class StocksController < ApplicationController
  def index
    render json: q ? Stock.search(q: q) : Stock.all
  end

  private

  def q
    params[:q]
  end
end
