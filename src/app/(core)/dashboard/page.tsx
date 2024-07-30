import MaterialComponent from '@/components/widgets/MaterialComponent'
import { MaterialType } from '../../../../types'

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <MaterialComponent type={MaterialType.Word} user={"Mohit Kamlesh Panchal"} date={new Date()} link={"https://youtu.be/aoB2CiFNGdc?si=dA_2933_oOypEBfj"} title={"Homework"} websiteLink={"/groups"} />
    </div>
  )
}