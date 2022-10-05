import { createNavigationContainerRef } from '@react-navigation/native';

const useNavigation = () => {
  const ref = createNavigationContainerRef();

  const navigate = (name: string) => {
    if(ref.isReady()){
        name && ref.navigate(name);
    }
  }

  

  return {ref, navigate};
}

export default useNavigation