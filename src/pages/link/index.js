import React, { useEffect } from 'react'
import { Button, Space, Tag, Row, Col, Divider, Timeline, Tree, Alert, Progress, Transfer } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';

import { initTheme, switcher, removePreTheme, getTheme } from './themeSwitcher'

const SplitSpace = (props) => <Space split={<Divider type="vertical" />} size={4} {...props} />;

const themeList = [
  {key: 'default', label: '默认主题'},
  {key: 'compact', label: '紧凑主题'},
  {key: 'dark', label: '暗黑主题'}
]

const treeData = [
  {
    value: 'little',
    key: 'little',
    label: 'Little',
    title: 'Little',
    children: [
      {
        value: 'light',
        key: 'light',
        label: 'Light',
        title: 'Light',
      },
      {
        value: 'bamboo',
        key: 'bamboo',
        label: 'Bamboo',
        title: 'Bamboo',
      },
    ],
  },
];

const MyTransfer = () => {
  const mockData = [];

  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    });
  }

  return (
    <Transfer
      dataSource={mockData}
      targetKeys={['18']}
      selectedKeys={['3']}
      render={(item) => item.title}
    />
  );
};

function Link() {
  useEffect(() => {
    initTheme()
  }, [])

  const handleChangeTheme = ({ theme }) => {
    console.log('getTheme(): ', getTheme());
    if (theme === getTheme()) {
      return
    }
    switcher({
      theme: theme,
      useStorage: true,
    });
  }

  return (
    <div>
      {
        themeList.map(({key, label}) => (
          <Button type="primary" key={key} onClick={() => handleChangeTheme({theme: key})} style={{marginRight: '10px'}}>{label}</Button>
        ))
      }
        <Space direction="vertical" align="center">
          <SplitSpace>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
            <Tag.CheckableTag checked>CheckableTag</Tag.CheckableTag>
          </SplitSpace>

          <Row gutter={16}>
            <Col span={16}>
              <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="gray">
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <ClockCircleOutlined
                      style={{
                        fontSize: '16px',
                      }}
                    />
                  }
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Timeline.Item>
              </Timeline>
            </Col>

            <Col span={8}>
              <Tree treeData={treeData} height={200} defaultExpandAll checkable />
            </Col>
          </Row>

          {/* Alert */}
          <Row gutter={16}>
            <Col span={6}>
              <Alert showIcon message="Success Text" type="success" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Info Text" type="info" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Warning Text" type="warning" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Error Text" type="error" />
            </Col>
          </Row>

          {/* Progress */}
          <Row gutter={16}>
            <Col flex="auto">
              <Progress percent={30} />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
            </Col>
            <Col flex="none">
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
            </Col>
          </Row>

          <MyTransfer />
        </Space>

    </div>
  )
}
export default Link