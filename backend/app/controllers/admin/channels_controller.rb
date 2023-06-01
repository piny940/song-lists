class Admin::ChannelsController < Admin::Base
  before_action :set_channel, only: %i[ show edit update destroy ]

  def index
    @channels = Admin::Channel.all
  end

  def show; end

  def new
    @channel = Admin::Channel.new
  end

  def edit; end

  def create
    @channel = Admin::Channel.new(channel_params)

    if @channel.save
      redirect_to @channel, notice: "Channel が作成されました。"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @channel.update(channel_params)
      redirect_to admin_channels_path, notice: "Channel が更新されました。"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @channel.destroy
    redirect_to admin_channels_path, notice: "Channel が削除されました。"
  end

  private

  def set_channel
    @channel = Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:channel_id, :name, :twitter_id, :response_json)
  end
end
