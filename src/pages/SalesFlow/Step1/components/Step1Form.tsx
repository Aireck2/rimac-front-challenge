/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/common/components';
import { useUserStore } from '@/store';
import { Checkbox, Flex, Form, Input, Select, type FormProps } from 'antd';
import { useLocation } from 'wouter';

type FieldType = {
  documentType?: string;
  documentNumber?: string;
  phoneNumber?: string;
  isTerms?: boolean;
  isMarketing?: boolean;
};

export const Step1Form = () => {
  const [_location, navigate] = useLocation();
  const {
    documentType,
    documentNumber,
    phoneNumber,
    isTerms,
    isMarketing,
    setUser,
    loadUser,
  } = useUserStore();

  const handleFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    loadUser();
    setUser({
      documentType: values.documentType,
      documentNumber: values.documentNumber,
      phoneNumber: values.phoneNumber,
      isTerms: values.isTerms,
      isMarketing: values.isMarketing,
    });
    navigate('cotiza-tu-seguro-rimac/1');
  };

  return (
    <div>
      <Form
        layout="vertical"
        name="step1"
        initialValues={{
          documentType: documentType || 'DNI',
          documentNumber: documentNumber,
          phoneNumber: phoneNumber,
          isTerms: isTerms,
          isMarketing: isMarketing,
        }}
        requiredMark={false}
        onFinish={handleFinish}
      >
        <Flex
          align="center"
          style={{
            border: '1px solid black',
            borderRadius: '1rem',
            margin: '0 0 1rem',
          }}
        >
          <Form.Item<FieldType>
            label=""
            name="documentType"
            rules={[{ required: true }]}
            style={{ margin: 0 }}
          >
            <Select
              variant="borderless"
              size="large"
              style={{
                height: 56,
                width: 140,
              }}
              options={documentTypes}
            />
          </Form.Item>
          <div style={{ height: 56, width: 1, background: 'black' }}></div>
          <Form.Item
            label="Nro de documento"
            name="documentNumber"
            style={{ margin: '0 1rem', padding: 0 }}
            rules={[
              { required: true, message: '¡El campo es requerido!' },
              {
                pattern: /^[0-9]{1,8}$/,
                message: 'Solo números y máximo 8 dígitos',
              },
            ]}
          >
            <Input
              size="large"
              variant="borderless"
              style={{ width: '100%', margin: 0 }}
            />
          </Form.Item>
        </Flex>

        <div
          style={{
            border: '1px solid black',
            borderRadius: '1rem',
            margin: '0 0 1rem',
          }}
        >
          <Form.Item<FieldType>
            label="Celular"
            name="phoneNumber"
            rules={[
              { required: true, message: '¡El campo es requerido!' },
              {
                pattern: /^[0-9]{1,9}$/,
                message: 'Solo números y máximo 9 dígitos',
              },
            ]}
            style={{ margin: '0 1rem', padding: 0 }}
          >
            <Input variant="borderless" />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          name="isTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('¡El campo es requerido!'),
            },
          ]}
        >
          <Checkbox>Acepto la Política de Privacidad</Checkbox>
        </Form.Item>
        <Form.Item<FieldType>
          name="isMarketing"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('¡El campo es requerido!'),
            },
          ]}
        >
          <Checkbox>Acepto la Política Comunicaciones Comerciales</Checkbox>
        </Form.Item>
        <div style={{ margin: '1rem 0' }}>
          <a href="/#">Aplican Términos y Condiciones.</a>
        </div>
        <Button block htmlType="submit" type="primary">
          Cotiza aquí
        </Button>
      </Form>
    </div>
  );
};

const documentTypes = [
  { value: 'DNI', label: 'DNI' },
  { value: 'CE', label: 'CARNET DE EXTRANJERIA.' },
];
