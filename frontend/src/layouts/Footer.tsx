import { useLogout } from '@/hooks/session'
import { useUser } from '@/hooks/user'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const { data } = useUser()
  const { logout } = useLogout()

  return (
    <footer className="footer text-center bg-secondary text-white p-4">
      {data?.user && (
        <>
          <Link href="/maintenance" className="text-white">
            メンテナンスする
          </Link>
          ｜
        </>
      )}
      <Link href="/about" className="text-white">
        このサイトについて
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
    </footer>
  )
}
