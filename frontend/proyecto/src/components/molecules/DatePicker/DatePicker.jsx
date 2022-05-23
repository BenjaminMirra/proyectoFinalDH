import { DatePicker, Space } from 'antd';
import './DatePicker.css'
const { RangePicker } = DatePicker;

export default () => (
  <Space direction="vertical" size={12}>
   
    <RangePicker
        placeholder='Check in'
        dateRender={current => {
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </Space>
);