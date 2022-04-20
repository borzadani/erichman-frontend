import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';


const CustomInput = ({
                         control,
                         name,
                         rules = {},
                         placeholder,
                         type,
                         inputName,
                         required=false,
                         secureTextEntry,
                         onPressPasswordIcon
                     }) => {

    const [textInputEnded, setTextInputEnded] = useState(false);
    const [neutral, setNeutral] = useState(true);

    const endEditing = (val) => {
        if( val.length !== 0 ) {
            setTextInputEnded(true);
            setNeutral(false);
        } else {
           setTextInputEnded(false);
           setNeutral(true);
        }
    }


    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <Text style={styles.inputName}>{inputName}{required ? "*" : ""}</Text>
                    <View
                        style={[
                            styles.container,
                            {borderColor: error ? 'red' : neutral ? "#E2E8F0" : "#27AE60"},
                        ]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onEndEditing={(val) => endEditing(val)}
                            textContentType={type}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#E2E8F0',
        borderWidth: 1,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 0,
    },
    input: {
        width: "95%"
    },
    inputName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#2D3748',
        fontSize: 12,
        paddingTop: 10
    },
    icons: {
        alignContent: "flex-end",

    }
});

export default CustomInput;
