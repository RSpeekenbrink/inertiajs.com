import Code from './Code'
import dedent from 'dedent'
import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import TabbedCodeExamples from '../components/TabbedCodeExamples'

const components = {
  h1: ({ children }) => <h1 className="mb-8 text-4xl font-bold text-gray-700 leading-none">{children}</h1>,
  h2: ({ children }) => <h2 className="mt-16 mb-4 text-2xl font-bold text-gray-700 leading-none">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-16 mb-4 text-xl font-bold text-gray-700 leading-none">{children}</h3>,
  pre: ({ children }) => <pre className="my-8 block rounded overflow-hidden">{children}</pre>,
  a: (props) => <a className="text-blue-700 hover:text-orange-700 font-medium underline" {...props} />,
  code: (props) => <Code {...props} />,
  inlineCode: (props) => <code className="font-mono text-sm font-bold bg-gray-200 rounded p-1" {...props} />,
}

export default function Layout({ meta, children }) {
  return (
    <div className="leading-none font-sans text-gray-800 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="overflow-hidden text-white" css={{ background: 'linear-gradient(to right, #9553e9, #6d74ed)' }}>
        <div className="max-w-6xl mx-auto relative">
          <svg className="absolute z-10 top-0 w-auto" css={{ height: '600px', fill: '#b2b6ff', opacity: '.08' }} viewBox="0 0 95 52.8"><path d="M27.3 0H0l26.4 26.4L0 52.8h27.3l26.4-26.4z"/><path d="M68.6 0H41.3l26.4 26.4-26.4 26.4h27.3L95 26.4z"/></svg>
          <header className="py-12 relative z-20 flex justify-between">
            <Link href="/">
              <a>
                <svg className="fill-current text-white" viewBox="0 0 637.4 50.48" css={{ height: '25px' }}>
                  <path d="M231.19 16.08H213.4l17.2 17.2-17.2 17.2h17.79l17.2-17.2-17.2-17.2z"></path>
                  <path d="M258.09 16.08h-17.78l17.2 17.2-17.2 17.2h17.78l17.2-17.2-17.2-17.2zM320.2 36.73h-4.55V50.2h-2V36.73h-4.54v-1.94h11.09zM338.18 34.79V50.2h-2v-6.94h-7.48v6.94h-2V34.79h2v6.54h7.48v-6.54zM355.07 48.26v1.94h-9.17V34.79h9.08v1.94h-7v4.73h6.49v1.91h-6.57v4.89zM386.25 50.2h-2v-12l-5 8.38h-.35l-5-8.36v12h-2V34.79h2.31l4.9 8.14 4.89-8.14h2.31zM393.13 42.49a8 8 0 1 1 8 8 7.91 7.91 0 0 1-8-8zm13.91 0a5.94 5.94 0 1 0-5.94 6 5.88 5.88 0 0 0 5.94-6zM429.26 42.49c0 4.27-3.06 7.71-7.31 7.71h-6V34.79h6a7.37 7.37 0 0 1 7.31 7.7zm-2 0c0-3.25-2.18-5.76-5.35-5.76h-4v11.53h4c3.21 0 5.39-2.51 5.39-5.77zM445.34 48.26v1.94h-9.2V34.79h9.09v1.94h-7v4.73h6.49v1.91h-6.49v4.89zM457.9 44.3h-3.63v5.9h-2.07V34.79h6.16a4.75 4.75 0 0 1 1.61 9.24l3.63 6.17h-2.27zm-3.63-1.85h4.11a2.87 2.87 0 0 0 0-5.74h-4.11zM481.66 34.79V50.2h-1.65l-7.92-11.53v11.51h-2.05V34.79h1.65l7.92 11.49V34.79zM513.67 50.2h-2v-12l-5 8.38h-.26l-5-8.36v12h-2V34.79h2.31l4.91 8.14 4.88-8.14h2.31zM520.56 42.49a8 8 0 1 1 8 8 7.9 7.9 0 0 1-8-8zm13.9 0a5.94 5.94 0 1 0-5.94 6 5.87 5.87 0 0 0 5.94-6zM554.99 34.79V50.2h-1.65l-7.92-11.53v11.51h-2V34.79h1.65l7.83 11.49V34.79zM561.9 42.49a8 8 0 1 1 8 8 7.91 7.91 0 0 1-8-8zm13.91 0a5.94 5.94 0 1 0-5.94 6 5.88 5.88 0 0 0 5.91-6zM593.38 48.26v1.94h-8.69V34.79h2v13.47zM601.9 34.79V50.2h-2.05V34.79zM619.42 36.73h-4.52V50.2h-2V36.73h-4.53v-1.94h11.11zM637.4 34.79V50.2h-2v-6.94h-7.5v6.94h-2V34.79h2v6.54h7.48v-6.54zM6.02 15.32h10.26l-6 34.2H0zm.61-9.17A7.59 7.59 0 0 1 13.75 0a5.14 5.14 0 0 1 5.2 6.15 7.53 7.53 0 0 1-7.18 6.16 5.1 5.1 0 0 1-5.14-6.16zM54.31 28.52l-3.69 21H40.36l3.42-19.49c.75-4.38-1.64-6.23-4.93-6.23s-6.5 2-7.45 6.64l-3.35 19.08H17.78l6-34.2h10.26l-.54 3.22a13.8 13.8 0 0 1 10-4.18c7.12 0 12.4 5.07 10.81 14.16zM94.46 32.42a24.07 24.07 0 0 1-1.09 4.11H68.9c.62 3.76 3.76 4.78 7.05 4.78a10 10 0 0 0 7.18-2.66l7.18 5.88c-4 4-8.69 5.95-15 5.95-11.83 0-18-8.48-16.35-18.74a20.71 20.71 0 0 1 20.46-17.38c9.85 0 16.96 7.66 15.04 18.06zm-9.64-3.69c-.34-3.83-3-5.27-6.16-5.27a9 9 0 0 0-8.34 5.27zM123.95 14.67l-2 11.63c-4-.62-10.46.75-11.7 7.79l.07-.41-2.8 15.87H97.27l6-34.2h10.26l-1.1 6.16c2.14-4.68 6.66-6.84 11.52-6.84zM137.83 37.28c-.55 3.08 2 3.28 6.57 2.94l-1.64 9.3c-12.32 1.37-16.9-2.66-15.19-12.24l2.12-12.11h-5.47l1.78-9.85h5.4l1.16-6.5 10.81-3.08-1.71 9.58h7.12L147 25.17h-7.05zM155.27 15.32h10.26l-6 34.2h-10.28zm.62-9.17A7.58 7.58 0 0 1 163 0a5.14 5.14 0 0 1 5.2 6.15 7.52 7.52 0 0 1-7.18 6.16 5.09 5.09 0 0 1-5.12-6.16zM208.15 15.32l-6 34.2H191.9l.41-2.32c-2.53 2.12-5.88 3.28-10.26 3.28-11.08 0-15.32-9.64-13.55-18.88 1.58-8.75 8.55-17.24 19.23-17.24 4.51 0 7.66 1.78 9.57 4.59l.62-3.63zM194.9 32.49v-.07c.89-5.13-1.92-8.34-6.64-8.34s-8.62 3.21-9.51 8.34 1.85 8.35 6.57 8.35a9.62 9.62 0 0 0 9.58-8.28z"></path>
                </svg>
              </a>
            </Link>
            <div className="flex items-center text-white">
              <a className="block flex items-center hover:text-purple-900 mr-5" href="https://github.com/inertiajs">
                <svg className="fill-current w-6 h-6" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/></svg>
              </a>
              <a className="block flex items-center hover:text-purple-900 mr-5" href="https://twitter.com/inertiajs">
                <svg className="fill-current w-6 h-6" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"/></svg>
              </a>
              <a className="block flex items-center hover:text-purple-900" href="https://discord.gg/gwgxN8Y">
                <svg className="fill-current w-6 h-6" viewBox="0 0 146 146"><title>Discord</title><path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fillRule="nonzero"/></svg>
              </a>
            </div>
          </header>
          { meta.hero &&
            <div className="mt-16 relative z-20 flex items-start">
              <div className="w-1/2 mt-4">
                  <h1 className="text-5xl leading-tight font-light">
                    Build single-page apps, <strong className="font-bold">without building an API.</strong>
                  </h1>
                  <p className="mt-8 text-xl leading-relaxed max-w-md pr-2">
                    Inertia.js allows you to <strong className="font-bold" css={{ color: '#92eee2' }}>quickly build modern <span className="whitespace-no-wrap">single-page</span> React and Vue.js applications</strong> using classic server-side routing and controllers.
                  </p>
              </div>
              <div className="w-1/2 pl-24">
                <TabbedCodeExamples
                  height="320"
                  examples={[
                    {
                      name: 'UsersController.php',
                      language: 'php',
                      code: dedent`
                        class UsersController
                        {
                            public function index()
                            {
                                $users = User::active()
                                    ->orderByName()
                                    ->get()
                                    ->only('id', 'name', 'email');

                                return Inertia::render('Users', [
                                    'users' => $users
                                ]);
                            }
                        }
                      `
                    },
                    {
                      name: 'Users.vue',
                      language: 'html',
                      code: dedent`
                        <template>
                          <layout title="Users">
                            <div v-for="user in users" :key="user.id">
                              <inertia-link :href="\`/users/\${user.id}\`">
                                {{ user.name }}
                              </inertia-link>
                              <div>{{ user.email }}</div>
                            </div>
                          </layout>
                        </template>

                        <script>
                        import Layout from '../Shared/Layout'

                        export default {
                          components: {
                            Layout,
                          },
                          props: {
                            users: Array,
                          },
                        }
                        </script>
                      `
                    }
                  ]}
                />
              </div>
            </div>
          }
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex py-24">
        <nav className="w-64 flex-shrink-0 border-r">
          <div className="text-xs font-bold uppercase text-gray-500 tracking-widest">Getting started</div>
          <ul className="font-medium">
            <li className="mt-4"><Link href="/"><a className="hover:underline">Introduction</a></Link></li>
            <li className="mt-4"><Link href="/installation"><a className="hover:underline">Installation</a></Link></li>
            <li className="mt-4"><Link href="/server-side-setup"><a className="hover:underline">Server-side</a></Link></li>
            <li className="mt-4"><Link href="/client-side-setup"><a className="hover:underline">Client-side</a></Link></li>
            <li className="mt-4"><Link href="/code-splitting"><a className="hover:underline">Code splitting</a></Link></li>
          </ul>
          <div className="mt-12 text-xs font-bold uppercase text-gray-500 tracking-widest">Core concepts</div>
          <ul className="font-medium">
            <li className="mt-4"><Link href="/routing"><a className="hover:underline">Routing</a></Link></li>
            <li className="mt-4"><Link href="/pages"><a className="hover:underline">Pages</a></Link></li>
            <li className="mt-4"><Link href="/links"><a className="hover:underline">Links</a></Link></li>
            <li className="mt-4"><Link href="/forms"><a className="hover:underline">Forms</a></Link></li>
            <li className="mt-4"><Link href="/shared-data"><a className="hover:underline">Shared data</a></Link></li>
            <li className="mt-4"><Link href="/authorization"><a className="hover:underline">Authorization</a></Link></li>
          </ul>
          <div className="mt-12 text-xs font-bold uppercase text-gray-500 tracking-widest">Advanced</div>
          <ul className="font-medium">
          <li className="mt-4"><Link href="/asset-versioning"><a className="hover:underline">Asset versioning</a></Link></li>
            <li className="mt-4"><Link href="/local-state-caching"><a className="hover:underline">Local state caching</a></Link></li>
            <li className="mt-4"><Link href="/transforming-props"><a className="hover:underline">Transforming props</a></Link></li>
            <li className="mt-4"><Link href="/server-side-rendering"><a className="hover:underline">Server-side rendering</a></Link></li>
          </ul>
        </nav>
        <div className="flex-1 pl-16 leading-relaxed text-lg">
          <MDXProvider components={components} children={children} />
        </div>
      </div>
    </div>
  )
}
