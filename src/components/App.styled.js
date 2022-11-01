import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: #1f3349;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #1f3349;
`;

const Message = styled.p`
  color: red;
  letter-spacing: 0.02em;
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export { Title, Subtitle, Message, Container };
