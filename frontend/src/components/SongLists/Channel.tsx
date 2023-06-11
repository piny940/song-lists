import { TestID } from '@/resources/TestID'
import { ChannelType } from '@/resources/types'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const ChannelDiv = styled.div`
  height: 90px;
`

export type ChannelProps = {
  channel: ChannelType
  link: string
}

export const Channel: React.FC<ChannelProps> = ({ channel, link }) => {
  return (
    <Link href={`${link}/${channel.id}`}>
      <ChannelDiv
        className="d-flex flex-grow-1 border border-light rounded m-1 p-2 shadow-sm"
        data-testid={TestID.CHANNEL}
      >
        <div className="d-flex align-items-center">
          <Image
            alt="channel icon"
            src={channel.thumbnails.default.url}
            width={80}
            height={80}
            className="rounded-circle"
          />
        </div>
        <div className="d-flex flex-column ms-3">
          <span className="fw-bold mt-2 ms-2">{channel.name}</span>
        </div>
      </ChannelDiv>
    </Link>
  )
}
