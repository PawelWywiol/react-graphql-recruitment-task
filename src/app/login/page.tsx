import { Header } from '@/components/header/header';
import { LoginForm } from '@/components/login-form/login-form';

export default function Page() {
  return (
    <>
      <Header title="Login" />
      <section className="container-content py-20">
        <LoginForm />
      </section>
    </>
  );
}
