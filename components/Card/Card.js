import { DownOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

function Card({ id, name }) {
  const handleShowMore = () => {

  }

  return (
    <Collapse onChange={handleShowMore} expandIconPosition='right'>
      <Panel header={
        <Card title={name} extra={<DownOutlined onClick={handleShowMore} />}>
          <p> Aca va una info resumida</p>
          <p> Por ejemplo si tiene, terreno, cuantos predios tiene</p>
          <p> Persona natural o juridica</p>
        </Card>
      }>
      </Panel>
    </Collapse>
  )
}

export default Card;
