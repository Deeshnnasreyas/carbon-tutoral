'use client';
import { FlexGrid, Row, Column } from '@carbon/react';
import LoginForm from '@/components/Login/LoginForm';
export default function LoginPage() {
  return (
    <FlexGrid fullWidth>
      <Row style={{ paddingLeft: '10px' }}>
        <Column sm={2} md={8} lg={12}>
          <LoginForm />
        </Column>
      </Row>
    </FlexGrid>
  );
}
