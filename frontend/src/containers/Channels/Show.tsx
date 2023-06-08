import { SongItems } from '@/components/SongLists/SongItems'
import { Videos } from '@/components/SongLists/Videos'
import { ChannelType } from '@/resources/types'
import { getData } from '@/utils/api'
import Error from 'next/error'
import { useState } from 'react'
import useSWR from 'swr'

export type ChannelsShowProps = {
  id: number
}

export const ChannelsShow: React.FC<ChannelsShowProps> = ({ id }) => {
  const [query, setQuery] = useState('')

  const { data, error } = useSWR<{ channel: ChannelType }>(
    `/channels/${id}?`,
    getData
  )

  if (error) return <Error statusCode={404} />

  return data ? (
    <div className="channel">
      <h1>{data.channel.name}</h1>
      <div className="d-flex">
        <div className="w-50 px-3">
          <div className="row px-4 my-2">
            <div className="fw-bold col-2 col-form-label">検索</div>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
              />
            </div>
          </div>
          <SongItems query={query} />
        </div>
        <div className="w-50">
          <div className="text-sm fw-bold w-100 text-center">配信から検索</div>
          <Videos type="medium" channel={data.channel} />
        </div>
      </div>
    </div>
  ) : (
    <div className="">loading...</div>
  )
}
