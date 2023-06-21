import { useUser } from '@/hooks/user'
import { fetchApi } from '@/utils/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from 'styled-components'

const FooterTag = styled.footer`
  margin-top: 20px;
  position: sticky;
  top: 100vh;
`

export const Footer: React.FC = () => {
  const { data, mutate } = useUser()
  const router = useRouter()
  const logout = async () => {
    const response = await fetchApi({
      url: '/session',
      method: 'DELETE',
    })
    if (response.status >= 400) return

    void router.push('/')
    // mutateはrouter.push後でないといけない(ログイン画面にリダイレクトされていまう)
    await mutate()
  }

  return (
    <FooterTag className="footer text-center bg-secondary text-white p-4">
      <Link href="/maintenance" className="text-white">
        {data?.user ? 'メンテナンスする' : 'メンテナンスに参加する'}
      </Link>
      ｜
      <Link href="/inquiry" className="text-white">
        お問い合わせ
      </Link>
      {data?.user && (
        <>
          ｜
          <a type="button" onClick={logout}>
            ログアウト
          </a>
        </>
      )}
      <br />
      <small>
        &copy;2023
        <Link
          className="text-white"
          href="https://github.com/piny940"
          target="_blank"
        >
          piny940
        </Link>
      </small>
    </FooterTag>
  )
}
