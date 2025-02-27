import { useCreateTattoo } from '@/presentation/hooks/tattoos/create-tattoo.hook'
import { LinkOutlined, LoadingOutlined } from '@ant-design/icons'
import { Modal, Spin } from 'antd'
import { ButtonComponent } from '../../../../../components/button/button'
import { FormUI } from '../../../../../components/form'
import { RegisterTattooModalUI } from './styles'

export interface IModalRegisterTattoo {
  close: () => void
  showModal: boolean
}

export const ModalRegisterTattoo = (props: IModalRegisterTattoo) => {
  const { close, showModal } = props

  const { mutate, isPending } = useCreateTattoo()

  const onFinish = (tattooInfo: any) => {
    console.log(tattooInfo)
    mutate({
      imageLink: tattooInfo.link,
      title: tattooInfo.title,
      description: tattooInfo.description,
    })
    close()
  }

  return (
    <Modal title={'Cadastrar tatuagem'} centered open={showModal} footer={[]} onCancel={() => close()}>
      <FormUI.Form className="bg-white" name="login" initialValues={{}} style={{ width: '100%' }} onFinish={onFinish}>
        <FormUI.Item name="link" rules={[]}>
          <FormUI.Input
            style={{ height: '60px', width: '100%' }}
            prefix={<LinkOutlined />}
            placeholder="Link da imagem"
          />
        </FormUI.Item>

        <FormUI.Item name="title" rules={[]}>
          <FormUI.Input style={{ height: '60px', width: '100%' }} placeholder="Titulo da imagem" />
        </FormUI.Item>

        <FormUI.Item name="description" rules={[]}>
          <FormUI.Input style={{ height: '60px', width: '100%' }} placeholder="Descrição da imagem" />
        </FormUI.Item>

        <FormUI.Item>
          <ButtonComponent style={{ height: '60px', width: '100%' }} className="hover:border-2" type="submit">
            {isPending ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: '#734930' }} />
              </div>
            ) : (
              'Criar'
            )}
          </ButtonComponent>
        </FormUI.Item>
      </FormUI.Form>
      <RegisterTattooModalUI.Modal.Footer></RegisterTattooModalUI.Modal.Footer>
    </Modal>
  )
}
