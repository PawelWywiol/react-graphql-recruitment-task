import { Header } from '@/components/header/header';
import { LoginForm } from '@/components/login-form/login-form';

export default function Page() {
  return (
    <>
      <Header title="Login" />
      <section className="section-container py-20">
        <LoginForm />
      </section>
    </>
  );
}
