import { Container } from "react-bootstrap";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center mt-5">
        {children}
      </div>
    </Container>
  );
}
